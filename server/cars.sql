DROP TABLE IF EXISTS cars;
CREATE TABLE IF NOT EXISTS cars (
  id INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT /* eventuellt lär ändra på varchar för att anpassa längden i framtiden.*/ 
  ,regnr VARCHAR(8) NOT NULL
  ,marke  VARCHAR(9) NOT NULL
  ,model  VARCHAR(16) NOT NULL
  ,color     VARCHAR(6) NOT NULL
);
INSERT INTO cars(id,regnr,marke,model,color) VALUES (1,'MLB849','VOLVO','XC60','green');
INSERT INTO cars(id,regnr,marke,model,color) VALUES (2,'WXZ102','VOLKSWAGEN','ID.4','gray');
INSERT INTO cars(id,regnr,marke,model,color) VALUES (3,'GTR555','TOYOTA','RAV4','purple');
INSERT INTO cars(id,regnr,marke,model,color) VALUES (4,'HKL913','KIA','NIRO','red');
INSERT INTO cars(id,regnr,marke,model,color) VALUES (5,'PNO336','TESLA','MODEL Y','red');
INSERT INTO cars(id,regnr,marke,model,color) VALUES (6,'JMF62A','BMW','3-SERIE','red');
INSERT INTO cars(id,regnr,marke,model,color) VALUES (7,'XBT99K','AUDI','Q4 E-TRON','yellow');
INSERT INTO cars(id,regnr,marke,model,color) VALUES (8,'RCD14W','MERCEDES-BENZ','GLC','green');
INSERT INTO cars(id,regnr,marke,model,color) VALUES (9,'YHN28P','SKODA', 'ENYAQ','yellow');
INSERT INTO cars(id,regnr,marke,model,color) VALUES (10,'ZSE41M','PEUGEOT','208','yellow');


select * from cars;