// process input command line arguments
(function(){
	var optimist = require("optimist");
	global.args = optimist.usage("Visualize JS files complexity.\nUsage: $0")
			.default({
				help: 0,
				path: ["."],
				log: 1,
				report: "report.json",
				skip: [],
				sort: 1,
				colors: true
			}).alias('h', 'help').alias('p', 'path').alias('r', 'report').alias('s', 'skip')
			.string("path").string("report").string("skip").boolean("colors")
			.describe("path", "input folder with JS files, use multiple if necessary")
			.describe("log", "logging level: 0 - debug, 1 - info")
			.describe("report", "name of the output report file")
			.describe("skip", "filename or folder to skip, use multiple time if necessary")
			.describe('sort', 'table column to sort on for command window output, reverse sorting using --sort !column')
			.describe('colors', 'use terminal colors for output, might not work with continuous build servers')
			.argv;

	if (args.h || args.help || args["?"]) {
		optimist.showHelp();
		process.exit(0);
	}
}());