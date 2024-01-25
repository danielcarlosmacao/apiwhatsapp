## Funcionalidade:
* Enviar mensagens de texto via whatsapp para clientes cadastrados no mkauth


### autor do projeto:

https://github.com/MKCodec

### Requisitos :
* Servidor Linux CT ProxMox ou Direto no MkAuth
  
### Atualização da API 

```sh
sudo wget https://raw.githubusercontent.com/danielcarlosmacao/apiwhatsapp/main/mwsm.js -O /var/api/whatsapp/mwsm.js
```
### Instalação em CT Linux Exclusivo via ProxMox

1 - Atualize seu sistema
```sh
apt update
```
```sh
apt upgrade -y
```

2 - Instale as dependencias necessarias caso nao tenha.
```sh
apt-get install sudo -y 
```
```sh
apt-get install git -y 
```
```sh
apt-get install curl -y 
```
```sh
apt-get install libnss3-dev -y 
```
```sh
apt-get install libgdk-pixbuf2.0-dev -y
```
```sh
apt-get install libgtk-3-dev -y 
```
```sh
apt-get install libxss-dev -y 
```
```sh
apt-get install libasound2 -y
```

3 - Instale o node
```sh
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && apt-get install -y nodejs
```

4 - Instale o Mwsm
```sh
git clone https://github.com/danielcarlosmacao/apiwhatsapp.git /var/api/whatsapp && cd /var/api/whatsapp
```
5 - Instale o npm
```sh
npm install
```

6 - Configure a auto-inicialização
```sh
npm install pm2 -g && pm2 start mwsm.js --name Bot-Mwsm --watch && pm2 save && pm2 startup
```


### Instalação Integrada Direto no MkAuth 24.01

1 - Atualize o sistema
```sh
sudo apt update
```

2 - Instale as dependencias necessarias
```sh
sudo apt install git curl
```
```sh
sudo apt-get install ca-certificates fonts-liberation libappindicator3-1 libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils
```

3 - Instale o node
```sh
sudo curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && apt-get install -y nodejs
```

4 - Crie o diretório de instalação do Mwsm
```sh
sudo mkdir -p /var/api/whatsapp
```

5 - Instale o Mwsm
```sh
sudo git clone https://github.com/danielcarlosmacao/apiwhatsapp.git /var/api/whatsapp && cd /var/api/whatsapp
```
6 - Instale o npm
```sh
sudo npm install
```

7 - Configure a auto-inicialização
```sh
sudo npm install pm2 -g && pm2 start mwsm.js --name Bot-Mwsm --watch && pm2 save && pm2 startup
```


### Configurando o Servidor
1 - Acesse seu servidor web através do IP:8000
[![Node](https://raw.githubusercontent.com/danielcarlosmacao/apiwhatsapp/main/node.png)](#)

2 - Aguarde a geração do QRCode

3 - Faça a leitura do QRCode com o WhatsApp

** `Menu > Aparelhos Conectados > Conectar um Aparelho`

4 - Configure seu servidor no MKAuth seguindo as instruções do servidor Web

** `Opções > Servidor de SMS > Servidor`
[![MkAuth](https://raw.githubusercontent.com/danielcarlosmacao/apiwhatsapp/main/mkauth.png)](#)

### Comandos
Quebra de Balão -> `\n` ou `##`

Negrito : -> `*` Antes e depois do texto destacado

### Testando
Para testar utilize o comando abaixo no Prompt

`DDDNUMERO` : Troque pelo numero com DDD

`MENSAGEM` : Troque pela sua mensagem

`IPDOSERVIDOR` : Troque pelo ip do servidor

```sh
sudo curl -d "to=55DDDNUMERO&msg=MENSAGEM" --header "application/x-www-form-urlencoded" -X POST http://IPDOSERVIDOR:8000/send-message
```

