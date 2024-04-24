<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\AlunosModel;
use CodeIgniter\HTTP\ResponseInterface;

class Alunos extends BaseController
{
    private $alunosModel;

    public function __construct()
    {
        $this->alunosModel = new AlunosModel();
    }

    public function index()
    {
        return view('alunos', [
            'alunos' => $this->alunosModel->findAll()
        ]);
    }
}