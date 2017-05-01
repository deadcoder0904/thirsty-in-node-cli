var schedule = require('node-schedule');
var process = require('process');
var chalk = require('chalk');
var CFonts = require('cfonts');
var inquirer = require('inquirer');

process.stdout.write('\u001bc');
CFonts.say('Water|Time!', {
    font: 'block',        //define the font face
    align: 'left',        //define text alignment
    colors: ['blue'],    //define all colors
    background: 'Black',  //define the background color
    letterSpacing: 1,     //define letter spacing
    lineHeight: 1,        //define the line height
    space: true,          //define if the output text should have empty lines on top and on the bottom
    maxLength: '0'        //define how many character can be on one line
});

var j = schedule.scheduleJob('* */2 * * *', function(){
	var questions = [
	{
		type: 'input',
		name: 'water',
		message: chalk.green('Did you Drink Water 🍹  : ')
	}
	];
	inquirer.prompt(questions).then(function (answers) {
		var truth = ['y','Y','yes','Yes','yEs','yeS','YEs','yES','YeS','YES'];
		var value = answers.water;
		if(truth.indexOf(value) == -1)
			console.log(chalk.red('Please drink water now or you\'ll get dehydrated  🚑 '));
		else console.log(chalk.blue('Then let\'s code, Champ 😉!'));
	});
});
