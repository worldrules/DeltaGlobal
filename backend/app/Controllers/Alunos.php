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

    public function create()
    {
        $validation = \Config\Services::validation();
        $rules = [
            'nome' => 'required',
            'sobrenome' => 'required',
            'idade' => 'required|numeric',
            'email' => 'required|valid_email',
            'endereco' => 'required',
            'nome_pai' => 'required',
            'nome_mae' => 'required',
        ];

        if (!$this->validate($rules)) {
            return $this->failValidationErrors($validation->getErrors());
        }

        $model = new AlunosModel();
        $data = [
            'nome' => $this->request->getPost('nome'),
            'sobrenome' => $this->request->getPost('sobrenome'),
            'idade' => $this->request->getPost('idade'),
            'email' => $this->request->getPost('email'),
            'endereco' => $this->request->getPost('endereco'),
            'nome_pai' => $this->request->getPost('nome_pai'),
            'nome_mae' => $this->request->getPost('nome_mae'),
        ];

        $model->insert($data);

        return $this->respondCreated(['message' => 'Aluno adicionado com sucesso.']);
    }

    public function update($id = null)
    {
        $validation = \Config\Services::validation();

        $rules = [
            'nome' => 'required',
            'sobrenome' => 'required',
            'idade' => 'required|numeric',
            'email' => 'required|valid_email',
            'endereco' => 'required',
            'nome_pai' => 'required',
            'nome_mae' => 'required',
        ];

        if (!$this->validate($rules)) {
            return $this->failValidationErrors($validation->getErrors());
        }

        $model = new AlunosModel();
        $data = [
            'nome' => $this->request->getPost('nome'),
            'sobrenome' => $this->request->getPost('sobrenome'),
            'idade' => $this->request->getPost('idade'),
            'email' => $this->request->getPost('email'),
            'endereco' => $this->request->getPost('endereco'),
            'nome_pai' => $this->request->getPost('nome_pai'),
            'nome_mae' => $this->request->getPost('nome_mae'),
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
