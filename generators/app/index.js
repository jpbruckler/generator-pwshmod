const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: "input",
        name: "modulename",
        message: "Your PowerShell module name",
        default: this.appname.replace(/\s+/g, "-"),
      },
      {
        type: "confirm",
        name: "useClasses",
        message: "Will this module use PowerShell classes?",
      },
    ]).then((answers) => {
      this.moduleName = answers.modulename;
      this.useClasses = answers.useClasses;
    });
  }

  writing() {
    const base = this.moduleName;

    // Root files
    this.fs.copyTpl(
      this.templatePath("README.md"),
      this.destinationPath(`${base}/README.md`),
      { modulename: this.moduleName },
    );

    // Directory structure with .gitkeep
    let folders = [
      "docs",
      "src/Classes",
      "src/Private",
      "src/Public",
      "src/testing/integration",
      "src/testing/unit/private",
      "src/testing/unit/public",
    ];

    if (this.useClasses == false) {
      folders.splice(1, 1);
    }

    folders.forEach((folder) => {
      this.fs.write(this.destinationPath(`${base}/${folder}/.gitkeep`), "");
    });
  }
};
