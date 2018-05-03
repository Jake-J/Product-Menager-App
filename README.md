# Product-Menager-App

running requirments:

- java 1.8
- Node 6.9.0 or higher
- NPM 3 or higher
- Angular CLI
- Apache Maven
- PostgreSQL
- modern browser 

How to run:

1. Clone repo to your disk.
2. Build maven project by runnig command `maven install` in console in main directory.
3. Install front-end modules by typing `npm install` to console at angular5-cli directory.
4. Setup postgres DB <br />
      -make sure to select your local server <br />
      -create role => `CREATE USER "user" WITH LOGIN SUPERUSER CREATEDB CREATEROLE INHERITNOREPLICATION CONNECTION LIMIT -1 PASSWORD 'xxxxxx';` <br />
      -create db => `CREATE DATABASE test WITH  OWNER = "user" ENCODING = 'UTF8' CONNECTION LIMIT = -1;` <br />
      -create tables:  <br />
          *distributors =>`CREATE TABLE public.distributors( dist_id bigint NOT NULL, name text NOT NULL, PRIMARY KEY (dist_id)) WITH (
                           OIDS = FALSE);` <br />
          *products => `(id bigint NOT NULL, price integer NOT NULL, name text NOT NULL, distributor_fk bigint NOT NULL, PRIMARY KEY (id),
                         CONSTRAINT distributor FOREIGN KEY (distributor_fk) REFERENCES public.distributors (dist_id) MATCH SIMPLE ON                               UPDATE NO ACTION ON DELETE RESTRICT) WITH (OIDS = FALSE);` <br />
                         
                         
5.Make sure ports :8090 and :4200 aren't use by your local machine. 
5.Start springboot app by executing `SpringJPA-Postgres-1-0.0.1-SNAPSHOT.jar` file in target directory.        
6.Start angular in dev mode by running `npm run start` in command line at angular5-cli folder.
7.visist 127.0.0.1:4200 at your browser to see the app.
