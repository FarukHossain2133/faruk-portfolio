

module.exports = (name, text) => {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Faruk Email Design</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body style="margin: 0; padding: 0;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">	
            <tr>
                <td style="padding: 10px 0 30px 0;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
                        <tr>
                            <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/h1.gif" alt="Creating Email Magic" width="300" height="230" style="display: block;" />
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
                                            <b>${name}</b>
                                            <br>
                                            <b>${text}</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus adipiscing felis, sit amet blandit ipsum volutpat sed. Morbi porttitor, eget accumsan dictum, nisi libero ultricies ipsum, in posuere mauris neque at erat.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                <tr>
                                                    <td width="260" valign="top">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                            <tr>
                                                                <td>
                                                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/left.gif" alt="" width="100%" height="140" style="display: block;" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 25px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus adipiscing felis, sit amet blandit ipsum volutpat sed. Morbi porttitor, eget accumsan dictum, nisi libero ultricies ipsum, in posuere mauris neque at erat.
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td style="font-size: 0; line-height: 0;" width="20">
                                                        &nbsp;
                                                    </td>
                                                    <td width="260" valign="top">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                            <tr>
                                                                <td>
                                                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/right.gif" alt="" width="100%" height="140" style="display: block;" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 25px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus adipiscing felis, sit amet blandit ipsum volutpat sed. Morbi porttitor, eget accumsan dictum, nisi libero ultricies ipsum, in posuere mauris neque at erat.
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#ee4c50" style="padding: 30px 30px 30px 30px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" width="75%">
                                            &reg; Someone, somewhere 2013<br/>
                                            <a href="#" style="color: #ffffff;"><font color="#ffffff">Unsubscribe</font></a> to this newsletter instantly
                                        </td>
                                        <td align="right" width="25%">
                                            <table border="0" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">
                                                        <a href="http://www.twitter.com/" style="color: #ffffff;">
                                                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/tw.gif" alt="Twitter" width="38" height="38" style="display: block;" border="0" />
                                                        </a>
                                                    </td>
                                                    <td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td>
                                                    <td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">
                                                        <a href="http://www.twitter.com/" style="color: #ffffff;">
                                                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/fb.gif" alt="Facebook" width="38" height="38" style="display: block;" border="0" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>`
}



















// module.exports = () => {
//   return  `<!doctype html>
//     <html>
//       <head>
//         <meta name="viewport" content="width=device-width">
//         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
//         <title>Simple Transactional Email</title>
//         <style>
//         /* -------------------------------------
//             INLINED WITH htmlemail.io/inline
//         ------------------------------------- */
//         /* -------------------------------------
//             RESPONSIVE AND MOBILE FRIENDLY STYLES
//         ------------------------------------- */
//         @media only screen and (max-width: 620px) {
//           table[class=body] h1 {
//             font-size: 28px !important;
//             margin-bottom: 10px !important;
//           }
//           table[class=body] p,
//                 table[class=body] ul,
//                 table[class=body] ol,
//                 table[class=body] td,
//                 table[class=body] span,
//                 table[class=body] a {
//             font-size: 16px !important;
//           }
//           table[class=body] .wrapper,
//                 table[class=body] .article {
//             padding: 10px !important;
//           }
//           table[class=body] .content {
//             padding: 0 !important;
//           }
//           table[class=body] .container {
//             padding: 0 !important;
//             width: 100% !important;
//           }
//           table[class=body] .main {
//             border-left-width: 0 !important;
//             border-radius: 0 !important;
//             border-right-width: 0 !important;
//           }
//           table[class=body] .btn table {
//             width: 100% !important;
//           }
//           table[class=body] .btn a {
//             width: 100% !important;
//           }
//           table[class=body] .img-responsive {
//             height: auto !important;
//             max-width: 100% !important;
//             width: auto !important;
//           }
//         }
    
//         /* -------------------------------------
//             PRESERVE THESE STYLES IN THE HEAD
//         ------------------------------------- */
//         @media all {
//           .ExternalClass {
//             width: 100%;
//           }
//           .ExternalClass,
//                 .ExternalClass p,
//                 .ExternalClass span,
//                 .ExternalClass font,
//                 .ExternalClass td,
//                 .ExternalClass div {
//             line-height: 100%;
//           }
//           .apple-link a {
//             color: inherit !important;
//             font-family: inherit !important;
//             font-size: inherit !important;
//             font-weight: inherit !important;
//             line-height: inherit !important;
//             text-decoration: none !important;
//           }
//           #MessageViewBody a {
//             color: inherit;
//             text-decoration: none;
//             font-size: inherit;
//             font-family: inherit;
//             font-weight: inherit;
//             line-height: inherit;
//           }
//           .btn-primary table td:hover {
//             background-color: #34495e !important;
//           }
//           .btn-primary a:hover {
//             background-color: #34495e !important;
//             border-color: #34495e !important;
//           }
//         }
//         </style>
//       </head>
//       <body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
//         <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
//           <tr>
//             <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
//             <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
//               <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">
    
//                 <!-- START CENTERED WHITE CONTAINER -->
//                 <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">This is preheader text. Some clients will show this text as a preview.</span>
//                 <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">
    
//                   <!-- START MAIN CONTENT AREA -->
//                   <tr>
//                     <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
//                       <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
//                         <tr>
//                           <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
//                             <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Hi there,</p>
//                             <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Sometimes you just want to send a simple HTML email with a simple design and clear call to action. This is it.</p>
//                             <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
//                               <tbody>
//                                 <tr>
//                                   <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;">
//                                     <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
//                                       <tbody>
//                                         <tr>
//                                           <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center;"> <a href="http://htmlemail.io" target="_blank" style="display: inline-block; color: #ffffff; background-color: #3498db; border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #3498db;">Call To Action</a> </td>
//                                         </tr>
//                                       </tbody>
//                                     </table>
//                                   </td>
//                                 </tr>
//                               </tbody>
//                             </table>
//                             <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">This is a really simple email template. Its sole purpose is to get the recipient to click the button with no distractions.</p>
//                             <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Good luck! Hope it works.</p>
//                           </td>
//                         </tr>
//                       </table>
//                     </td>
//                   </tr>
    
//                 <!-- END MAIN CONTENT AREA -->
//                 </table>
    
//                 <!-- START FOOTER -->
//                 <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
//                   <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
//                     <tr>
//                       <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
//                         <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">Company Inc, 3 Abbey Road, San Francisco CA 94102</span>
//                         <br> Don't like these emails? <a href="http://i.imgur.com/CScmqnj.gif" style="text-decoration: underline; color: #999999; font-size: 12px; text-align: center;">Unsubscribe</a>.
//                       </td>
//                     </tr>
//                     <tr>
//                       <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
//                         Powered by <a href="http://htmlemail.io" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">HTMLemail</a>.
//                       </td>
//                     </tr>
//                   </table>
//                 </div>
//                 <!-- END FOOTER -->
    
//               <!-- END CENTERED WHITE CONTAINER -->
//               </div>
//             </td>
//             <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
//           </tr>
//         </table>
//       </body>
//     </html>`
// }