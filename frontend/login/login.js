const formLogin = document.querySelector('#formLogin');

formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    try {
        const resp = await fetch(`http://localhost:3005/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const user = await resp.json();
        const errormsg = document.querySelector('.errormsg')

        if (user.ok) {
            errormsg.classList.add('hidden')
            window.location.href = "../main/homepage.html"
        } else {
            //alert(user.message)
            errormsg.classList.remove('hidden')
            errormsg.innerHTML = user.message
        }
    } catch (error) {
        console.log('Erro na req:', error)
    }
});