/*
Active:  status da automação true para ativo false para desativado
message: a mensagem que sera enviado automaticamente se mensagem estiver com valor false API nao enviara a mensagem.
keywords: o texto que sera reconhecido para envio automatico.
*/
module.exports = {
    naopix: {
        active: false,
        message: false,
        keywords: [['problema','pix'],['fiz','pix'],['feito','pix']]
    },
    pix: {
        active: false,
        message:'segue o pix: xxxx.xxx.xx',
        keywords: [['manda','pix'],['chave','pix'],['qual','pix']]
    },
    conta: {
        active: false,
        message:'segue a conta: xxxx.xx-x ',
        keywords: [['manda','conta'],['qual','conta'],['qual','banco'],['posso','transferi']]
    },
    manutencao: {
        active: false,
        message:'estamos em manutenção',
        keywords: [['net','ruim'],['net','lenta'],['parando','funcionar']]
    }
}