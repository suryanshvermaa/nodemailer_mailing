import inquirer from "inquirer";
import { openFile } from "./openfile.js";
import { sendingMail } from "./send_mail.js";
export const introToolInterface=`
+==================================================================================================================================================================+

                                          ░██████╗██╗░░░██╗██████╗░██╗░░░██╗░█████╗░███╗░░██╗░██████╗██╗░░██╗
                                          ██╔════╝██║░░░██║██╔══██╗╚██╗░██╔╝██╔══██╗████╗░██║██╔════╝██║░░██║
                                          ╚█████╗░██║░░░██║██████╔╝░╚████╔╝░███████║██╔██╗██║╚█████╗░███████║
                                          ░╚═══██╗██║░░░██║██╔══██╗░░╚██╔╝░░██╔══██║██║╚████║░╚═══██╗██╔══██║
                                          ██████╔╝╚██████╔╝██║░░██║░░░██║░░░██║░░██║██║░╚███║██████╔╝██║░░██║
                                          ╚═════╝░░╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░╚═╝░░╚═╝

+==================================================================================================================================================================+

#  ->  Open file on Command line interface and mail automation
  `
  console.log("\x1b[32m%s\x1b[0m",introToolInterface);


  const choices=['fileViwer','mailing','exit'];
inquirer.prompt([
    {
      type: 'list',
      name: 'selectedOption',
      message: 'Select',
      choices: choices,
    },
  ]).then((answers) => {
    console.log('');
    if(answers.selectedOption=='fileViwer'){
      openFile();
    }
    if(answers.selectedOption=='mailing'){
      sendingMail();
    }
    if(answers.selectedOption=='exit'){
      process.exit();
    }
  }).then(()=>{
    Main();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
