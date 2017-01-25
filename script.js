(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-90338237-1', 'auto');
ga('send', 'pageview');


function createLoginExchangeOverlay() {
    var site = location.href.split('/')[3];
    var div = document.createElement('div');
    div.id = 'login-exchange-overlay';
    div.className = 'is-hidden';
    div.innerHTML = `
<div class="modal-content">
    <span class="button-close" onclick="closeLoginExchangeModal();"></span>
    <h3>STOP!</h3>
    <p>This page is designed to look like ${site}, but it's not!</p>
    <p>Don't worry &mdash; nothing has been sent from your browser. But if this had been a malicious site, your login details would be in the hands of the bad guys by now.</p>
    <p><a href="/how-to-avoid-getting-phished">Click here</a> to find out more about phishing, fake sites, and how to stay safe online.</p>
</div>`;
    document.body.appendChild(div);
    return div;
}

var loginExchangeOverlay = createLoginExchangeOverlay();

function openLoginExchangeModal(){
  loginExchangeOverlay.classList.remove("is-hidden");
}

function closeLoginExchangeModal(){
  loginExchangeOverlay.classList.add("is-hidden");
}

function setupLoginForm(formElementId) {
    var form = document.getElementById(formElementId);
    form.onsubmit = function() {
        openLoginExchangeModal();
        ga('send', 'event', 'Login', 'clicked');
        return false;
    }
}