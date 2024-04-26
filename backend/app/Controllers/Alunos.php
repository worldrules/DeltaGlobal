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

    public function show($id = null)
    {
        $model = new AlunosModel();
        $data = $model->find(['id' => $id]);
        if (!$data) {
            return $this->failNotFound('Aluno não encontrado');
        }

        return $this->respond($data[0]);

    }



    public function create()
    {

        $model = new AlunosModel();
        $data = [
            'nome' => $this->request->getVar('nome'),
            'sobrenome' => $this->request->getVar('sobrenome'),
            'idade' => $this->request->getVar('idade'),
            'email' => $this->request->getVar('email'),
            'endereco' => $this->request->getVar('endereco'),
            'nome_pai' => $this->request->getVar('nome_pai'),
            'nome_mae' => $this->request->getVar('nome_mae'),
        ];

        $model->save($data);

        $response = [
            'status' => 200,
            'error' => null,
            'messages' => 'Aluno adicionado com sucesso.',
        ];

        return $this->respondCreated($response);
    }

    public function update($id = null)
    {

        $model = new AlunosModel();
        $data = [
            'nome' => $this->request->getVar('nome'),
            'sobrenome' => $this->request->getVar('sobrenome'),
            'idade' => $this->request->getVar('idade'),
            'email' => $this->request->getVar('email'),
            'endereco' => $this->request->getVar('endereco'),
            'nome_pai' => $this->request->getVar('nome_pai'),
            'nome_mae' => $this->request->getVar('nome_mae'),
        ];

        $model->update($id, $data);

        return $this->respond(['message' => 'Aluno atualizado com sucesso.']);
    }

    public function deleteAluno($id)
    {
        $model = new AlunosModel();
        $findById = $model->find(['id' => $id]);

        if (!$findById) {
            return $this->failNotFound('Aluno não encontrado.');
        }
        $model->delete($id);
        $response = [
            'status' => 200,
            'error' => null,
            'messages' => 'Aluno excluído com sucesso.',
        ];

        return $this->respondDeleted($response);
    }
}
