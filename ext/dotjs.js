var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.src = 'https://localhost:3131/'+location.hostname.replace(/^www\./,'')+'.js';
document.body.appendChild(script);
