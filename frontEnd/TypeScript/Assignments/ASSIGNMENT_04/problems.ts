function getBatteryStatus(percentage: number): string {
  if (percentage <= 20) {
    return "Low";
  } else if (percentage <= 50) {
    return "Medium";
  } else if (percentage <= 90) {
    return "High";
  } else {
    return "Full";
  }
}

interface Booking {
  name: string;
  guests: number;
  time: string;
}

function formatBookingConfirmation(booking: Booking): string {
  return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}

function calculateWeeklyTotal(expenses: number[]): number {
  return expenses.reduce((total, expense) => total + expense, 0);
}

type Light = "red" | "yellow" | "green";

function getTrafficAction(light: Light): string {
  if (light === "red") {
    return "Stop";
  } else if (light === "yellow") {
    return "Slow Down";
  } else {
    return "Go";
  }
}
