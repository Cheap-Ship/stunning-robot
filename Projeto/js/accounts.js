function registar()
{
    var pass = document.getElementById("pass").value;

    var all = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    var spec_chars = all.split('');
    
    for (var i = 0; i < spec_chars.length; i++)
    {
        if (pass.includes(spec_chars[i]))
        {
            alert("A password não pode conter " + spec_chars[i]);
        }
    }

    alert("Conta criada com sucesso!");
}

function login()
{
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if (user === "user")
    {
        if (pass === "12345678")
        {
            alert("Logado com sucesso!");
        } else
        {
            alert("Password incorreta");
        }
    } else
    {
        alert("Username incorreto");
    }
}