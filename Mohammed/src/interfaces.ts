// Used to define object structure
/*
interface Car extends Vehicle {
  readonly id: number
  model: string
  make: string
  year: number
  bhp: string
  torque: string
  color: string
  drivetrain: string

  // Add methods
  carStats(): string
}

function getCarDetails(id: number, model: string, make: string, year: number, bhp: string, torque: string, color: string, drivetrain: string): Car {
  return {
    id,
    type: 'Car',
    model,
    make,
    year,
    bhp,
    torque,
    color,
    drivetrain,
    carStats() {
      return `Model: ${this.model},
Make: ${this.make},
Year: ${this.year},
Bhp: ${this.bhp},
Torque: ${this.torque},
Color: ${this.color},
Drivetrain: ${this.drivetrain}`
    },
  }
}

const m5: Car = getCarDetails(1, 'M5 CS', 'BMW', 2022, '627hp', '553nm', 'Green with gold accents', 'AWD/RWD')

console.log(m5)

// Extending Interfaces
interface Vehicle {
  type: String
}

// Augmenting interfaces
// Interfaces with the same name are automatically merged into one

// Generic interfaces are the same as object interfaces
*/
