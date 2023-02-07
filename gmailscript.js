window.onload = function () 
{
    window.onhashchange = () => 
    {
        if (window.location.hash.startsWith('#inbox/')) {
            const spans = document.querySelectorAll('span');
    
            for (const span of spans) {
              if (span.innerText === 'Reply') {
                span.addEventListener('click', function() 
                {
                    const email = document.querySelector('.adn.ads');
                    (async function() 
                    {
                        const gptResponse = await chrome.runtime.sendMessage(email.textContent);
                        const gmailTextbox = document.querySelector('[role=textbox]');
                        gmailTextbox.innerText = gptResponse;
                    })();
                });
              }
            }
        }
    };
}