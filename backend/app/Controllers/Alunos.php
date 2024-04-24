<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\AlunosModel;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\HTTP\ResponseInterface;

class Alunos extends BaseController
{
    use ResponseTrait;

    public function index()
    {
        $model = new AlunosModel();
        $data = $model->findAll();
        return $this->respond($data);
    }
}