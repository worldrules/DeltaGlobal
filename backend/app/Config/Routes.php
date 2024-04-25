<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->setAutoRoute(true);
$routes->resource('alunos');
$routes->group('', function (RouteCollection $routes) {
    $routes->get('alunos', 'Alunos::index');
    $routes->post('alunos', 'Alunos::create');
    $routes->delete('alunos/(:num)', 'Alunos::deleteAluno/$1');
});