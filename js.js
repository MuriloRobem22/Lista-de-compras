// Importando a biblioteca jsPDF
import { jsPDF } from 'jspdf'

// Criando o documento PDF
const doc = new jsPDF()

// Adicionando o texto "Hello World!" ao documento PDF
doc.text('Hello World!', 10, 10)

// Salvando o documento PDF
doc.save('meu-pdf.pdf')
