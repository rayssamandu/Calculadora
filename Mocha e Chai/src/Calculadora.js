
export default class Calculadora {


    static soma(a, b) {
        return a + b
    }

    static sub(a, b) {
        return a - b
    }

    static div(a, b) {
        return a / b
    }

    static mult(a, b) {
        return a * b
    }

    static exp(a,b) {
        return a ** b
    }

    static raizQuadrada(a, raiz) {
        raiz = Math.sqrt(a)
        return raiz
    }

    static raizCubica(a, raizC) {
       raizC = Math.cbrt(a)
        return raizC
    }

    static seno(radians, radius) {
        return Math.sin(radians) * radius;
      }

    static cosseno(radians, radius) {
        return Math.cos(radians) * radius;
      }

}