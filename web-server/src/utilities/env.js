class Env {
  constructor() {
    this.API_ROOT = import.meta.env.VITE_API_ROOT
  }
}

const env = new Env()

export default env
