
let professores = [
  {
    id: "1",
    nome: "Prof. Carlos",
    idade: 40,
    departamento: "Matemática",
    turmas: [
      { codigo: "9A", disciplina: "MAT101", alunos: ["João", "Maria", "Pedro"] },
      { codigo: "10A", disciplina: "MAT201", alunos: ["Ana", "Luiz"] }
    ]
  },
  {
    id: "2",
    nome: "Prof. Ana",
    idade: 35,
    departamento: "História",
    turmas: [
      { codigo: "9A", disciplina: "HIS101", alunos: ["João", "Pedro"] },
      { codigo: "10B", disciplina: "HIS201", alunos: ["Maria", "Carlos", "Luiza"] }
    ]
  },
  {
    id: "3",
    nome: "Prof. João",
    idade: 50,
    departamento: "Ciências",
    turmas: [
      { codigo: "9A", disciplina: "CIE101", alunos: ["João", "Maria"] },
      { codigo: "9B", disciplina: "CIE101", alunos: ["Pedro", "Luiz"] }
    ]
  }
];

exports.listarProfessores = (req, res) => {
  res.json(professores);
};

exports.buscarProfessorPorId = (req, res) => {
  const professor = professores.find(p => p.id === req.params.id);
  if (!professor) return res.status(404).send("Id não existente");
  res.json(professor);
};

exports.listarTurmas = (req, res) => {
  const professor = professores.find(p => p.id === req.params.id);
  if (!professor) return res.status(404).send("Id não existente");
  res.json(professor.turmas);
};

exports.atualizarProfessor = (req, res) => {
  const professor = professores.find(p => p.id === req.params.id);
  if (!professor) return res.status(404).send("Id não existente");

  const { nome, idade, departamento } = req.body;
  if (nome !== undefined) professor.nome = nome;
  if (idade !== undefined) professor.idade = idade;
  if (departamento !== undefined) professor.departamento = departamento;

  res.json(professor);
};


exports.adicionarTurma = (req, res) => {
  const professor = professores.find(p => p.id === req.params.id);
  if (!professor) return res.status(404).send("Id não existente");

  const { codigo, disciplina, alunos } = req.body;
  if (!codigo || !disciplina || !alunos) {
    return res.status(400).send("Campos obrigatórios: codigo, disciplina, alunos");
  }

  professor.turmas.push({ codigo, disciplina, alunos });
  res.status(201).json(professor);
};

exports.listarPorDepartamento = (req, res) => {
  const dep = req.params.departamento.toLowerCase();
  const filtrados = professores.filter(p => p.departamento.toLowerCase() === dep);
  res.json(filtrados);
};

exports.removerProfessor = (req, res) => {
  const index = professores.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).send("Id não existente");

  const removido = professores.splice(index, 1);
  res.json(removido);
};
