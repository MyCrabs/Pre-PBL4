drop database if exists demo_node_api;
create database demo_node_api default character set utf8 collate utf8_unicode_ci;

use demo_node_api;

create table if not exists author
(
    id int primary key auto_increment,
    name varchar(100) unique
);

create table if not exists book
(
    id int primary key auto_increment,
    name varchar(100) not null,
    image varchar(100) null,
    author_id int not null,
    foreign key (author_id) references author (id)
);

insert into author(name) values
    ("Nam Cao"),
    ("Ngo Tat To"),
    ("To Huu");

insert into book(name, author_id) values   
    ('Lao Hac va con cho vang', 1),
    ('Luom', 3),
    ('Chi Pheo', 1),
    ('Chi Dau', 2);
 