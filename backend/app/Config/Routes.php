<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->setAutoRoute(true);
$routes->get('/', 'Home::index');
$routes->resource('alunos');
$routes->post('/alunos/upload-foto/(:num)', 'Alunos::salvarFoto/$1');
