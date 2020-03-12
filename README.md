# fwrk-angular-dot-net-core

### Instalação do front-end

Instale as dependências e inicie o aplicativo.

###### angular
```sh
$ npm install -g @angular/cli
```

###### root
```sh
$ cd Angular
```

###### dependencies
```sh
$ npm install
```

###### run
```sh
$ ng serve
```

###### browser
```sh
http://localhost:4200
```

### Instalação do back-end

Instale as dependências e inicie o aplicativo.

###### run package-manager-console => DevIO.Data
```sh
$ add-migration "CriarBd"
```
```sh
$ update-database
```

###### Execute em (localdb)\\mssqllocaldb;Database=MinhaApiCore; 

```sh
USE [MinhaApiCore]
GO

INSERT INTO [dbo].[EstadoCivil]
           ([Id]
           ,[Descricao])
     VALUES
           ('6853eb66-06b7-42c3-8988-1bfb2ec1904d', 'Solteiro(a)'),
		   ('a2e606a8-de35-42e0-862a-de7b7310abdd', 'Casado(a)'),
		   ('1eddf303-1818-4781-8816-97089ec49c63', 'Divorciado(a)'),
		   ('ab293056-e9ed-4023-9eff-cafda01a9956', 'Viúvo(a)'),
		   ('72cfc8c1-a47e-4df8-8382-f70fc1bb7775', 'Separado(a)')

GO
```
