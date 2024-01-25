
module.exports = {
    pix: {
        active: true,
        message:'segue o pix: ',
        keywords: [['manda','pix'],['chave','pix']]
    },
    conta: {
        active: true,
        message:'segue a conta: ',
        keywords: [['manda','conta'],['qual','conta'],['qual','banco']]
    },
    manutencao: {
        active: false,
        message:'estamos em manutenção',
        keywords: [['net','ruim'],['net','lenta'],['parando','funcionar']]
    }
}