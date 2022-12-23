INSERT INTO users(id, username, email, name, password, role, hours_per_week, status) VALUES
(0,'ana123','ana123@vegait.rs','Ana Anic','testsifra1234', 'Worker', 15, false);
INSERT INTO users(id, username, email, name, password, role, hours_per_week, status) VALUES
(1,'milan123','milan123@vegait.rs','Milan Milanic','testsifra1234', 'Worker', 7, true);
INSERT INTO users(id, username, email, name, password, role, hours_per_week, status) VALUES
(2,'mila123','mila123@vegait.rs','Mila Milic','testsifra1234', 'Admin', 0, true);
INSERT INTO users(id, username, email, name, password, role, hours_per_week, status) VALUES
(3,'123ivana','ivanammm@vegait.rs','Ivana Milic','testsifra1234', 'Worker', 0, true);

INSERT INTO client(id, name, zip_postal_code, address, country, city) VALUES
(0,'ADAM Software NV','201564','London 35/48','United Kingdom', 'London');
INSERT INTO client(id, name, zip_postal_code, address, country, city) VALUES
(1,'Clockwork','201564','Serbia 35/48','Serbia', 'Belgrade');
INSERT INTO client(id, name, zip_postal_code, address, country, city) VALUES
(2,'Emperor Design','201564','Paris 35/48','France', 'Paris');
INSERT INTO client(id, name, zip_postal_code, address, country, city) VALUES
(3,'Nina Media','201564','Paris 35/48','France', 'Paris');
INSERT INTO client(id, name, zip_postal_code, address, country, city) VALUES
(4,'Cubeworks','201564','Croatia 35/48','Croatia', 'Split');

INSERT INTO project(id, name, description, status, archive, client_id) VALUES
(0,'BuzzMonitor','BuzzMonitor mila123 worke here...', true, false, 3);
INSERT INTO lead(project_id, users_id) VALUES
(0, 2);
INSERT INTO project(id, name, description, status, archive, client_id) VALUES
(1,'PWN','Clockwork work here on this...', true, false, 1);
INSERT INTO lead(project_id, users_id) VALUES
(1, 0);
INSERT INTO project(id, name, description, status, archive, client_id) VALUES
(2,'B&G','Clockwork and Cubeworks are not the same...', true, false, 3);
INSERT INTO lead(project_id, users_id) VALUES
(2, 3);
INSERT INTO project(id, name, description, status, archive, client_id) VALUES
(3,'BBB','BBB and GGG are not the same...', true, false, 3);
INSERT INTO lead(project_id, users_id) VALUES
(3, 1);

INSERT INTO work_task(id, date, category, description, time, over_time, project_id, worker_id, client_id) VALUES
(0, '2022-08-01', 'Front-End Development', 'Create table..', 8.0, 1.0, 0, 2, 3);
INSERT INTO work_task(id, date, category, description, time, over_time, project_id, worker_id, client_id) VALUES
(1, '2022-07-29', 'Design', 'Create table no..', 2.0, 0.0, 1, 0, 1);
