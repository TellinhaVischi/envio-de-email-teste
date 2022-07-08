const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: 'smtp.office365.com', //esse para email hotmail
    port: 587, // porta para hotmail
    secure: false, //é true para porta 465 e false para outras, essa é a porta do gmail
    auth: {
        user: 'seu@email.com', //email de quem vai enviar o email
        pass: 'sua_senha', //senha do email que está enviando a mensagem (não funciona para gmail)
        // quando o usuário é do google você deve criar uma senha de app para usar

    }
});

transport.sendMail({
    from: 'Nome de quem está mandando<seu@email.com>',
    to: 'para_quem_vai_enviar@email.com',
    subject: 'titulo',
    html: '<h1> texto texto texto</h1> <p> texto texto texto</p>',
    text: 'Pode não ser enviado por html também',
})

.then(()=> console.log('email enviado com sucesso!'))
.catch((err) => console.log('erro ao enviar email: ', err));