import assert from "assert"
import chai from "chai"
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

describe('Testes de soma', () => {
    it('Deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)
    })

    it('Deve somar -4 e 5 resultando em 1', () => {
        let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.eq(1)
    })
    it('Deve somar -4 e -5 resultando em -9', () => {
        let resultado = Calculadora.soma(-4, -5)
        expect(resultado).to.be.eq(-9)
    })
})


describe('Testes de subtração', () => {
    it('Deve subtrair 4 e 5 resultando em -1', () => {
            let resultado = Calculadora.sub(4, 5)
            expect(resultado).to.be.eq(-1)
        })
    it('Deve subtrair -4 e 5 resultando em -9', () => {
            let resultado = Calculadora.sub(-4, 5)
            expect(resultado).to.be.eq(-9)
        })
    it('Deve subtrair -4 e -5 resultando em 1', () => {
            let resultado = Calculadora.sub(-4, -5)
            expect(resultado).to.be.eq(1)
        })
})

describe('Testes de divisão', () => {
    it('Deve dividir 10 e 5 resultando em 2', () => {
            let resultado = Calculadora.div(10, 5)
            expect(resultado).to.be.eq(2)
        })
    it('Deve dividir 10 e 0 retornando "Infinity"', () => {
            let resultado = Calculadora.div(10, 0)
            expect(resultado).to.be.eq(Infinity)
        })
    it('Deve dividir -10 e 5 resultando em -2', () => {
            let resultado = Calculadora.div(-10, 5)
            expect(resultado).to.be.eq(-2)
        })
    it('Deve dividir -10 e -5 resultando em 2', () => {
            let resultado = Calculadora.div(-10, -5)
            expect(resultado).to.be.eq(2)
        })
    })

describe('Testes de multiplicação', () => {
    it('Deve multiplicar 95 e 63 resultando em 5985', () => {
            let resultado = Calculadora.mult(95, 63)
                expect(resultado).to.be.eq(5985)
    })
    it('Deve multiplicar -95 e 63 resultando em -5985', () => {
            let resultado = Calculadora.mult(-95, 63)
                expect(resultado).to.be.eq(-5985)
    })
    it('Deve multiplicar -95 e -63 resultando em 5985', () => {
        let resultado = Calculadora.mult(-95, -63)
            expect(resultado).to.be.eq(5985)
})
})

describe('Testes de exponenciação', () => {
    it('Deve calcular 9 elevado a 3 resultando em 729', () => {
            let resultado = Calculadora.exp(9, 3)
                expect(resultado).to.be.eq(729)
    })
    it('Deve calcular -9 elevado a 2 resultando em 81', () => {
        let resultado = Calculadora.exp(9, 2)
            expect(resultado).to.be.eq(81)
    })
    it('Deve calcular 9 elevado a 0 resultando em 1', () => {
                let resultado = Calculadora.exp(9, 0)
                    expect(resultado).to.be.eq(1)
    })
})

describe('Testes de raiz quadrada', () => {
    it('Deve calcular a raiz quadrada de 144 resultando em 12', () => {
            let resultado = Calculadora.raizQuadrada(144)
                expect(resultado).to.be.eq(12)
    })
})

describe('Testes de raiz cúbica', () => {
    it('Deve calcular a raiz cúbica de 729 resultando em 9', () => {
            let resultado = Calculadora.raizCubica(729)
                expect(resultado).to.be.eq(9)
    })
})

describe('Testes de seno', () => {
    it('Deve calcular o seno entre 1 e 10, resultando em 8.414709848078965', () => {
            let resultado = Calculadora.seno(1, 10)
                expect(resultado).to.be.eq(8.414709848078965)
    })
})

describe('Testes de cosseno', () => {
    it('Deve calcular o cosseno entre 1 e 10, resultando em 5.403023058681398', () => {
            let resultado = Calculadora.cosseno(1, 10)
                expect(resultado).to.be.eq(5.403023058681398)
    })
})
