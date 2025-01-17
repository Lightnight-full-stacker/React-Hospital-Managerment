import moment from "moment/moment";
import { v4 as uuidv4 } from "uuid";

export const mockPatientData = [
  {
    id: 1,
    dateOfEntry: "2022-01-01",
    fullName: "John Doe",
    firstName: "John",
    lastName: "Doe",
    referredByDoctor: "Dr. Smith",
    status: "In Treatment",
    gender: "Male",
    age: 35,
    address: "123 Main St, Anytown USA",
    phoneNumber: "555-1234"
  },
  {
    id: 2,
    dateOfEntry: "2022-01-05",
    fullName: "Jane Smith",
    firstName: "Jane",
    lastName: "Smith",
    referredByDoctor: "Dr. Johnson",
    status: "Discharged",
    gender: "Female",
    age: 42,
    address: "456 Oak St, Anytown USA",
    phoneNumber: "555-5678"
  },
  {
    id: 3,
    dateOfEntry: "2022-01-05",
    fullName: "Jane Smith",
    firstName: "Jane",
    lastName: "Smith",
    referredByDoctor: "Dr. Johnson",
    status: "Discharged",
    gender: "Female",
    age: 42,
    address: "456 Oak St, Anytown USA",
    phoneNumber: "555-5678"
  },
  {
    id: 4,
    dateOfEntry: "2022-01-05",
    fullName: "Jane Smith",
    firstName: "Jane",
    lastName: "Smith",
    referredByDoctor: "Dr. Johnson",
    status: "Discharged",
    gender: "Female",
    age: 42,
    address: "456 Oak St, Anytown USA",
    phoneNumber: "555-5678"
  },
  {
    id: 5,
    dateOfEntry: "2022-01-05",
    fullName: "Jane Smith",
    firstName: "Jane",
    lastName: "Smith",
    referredByDoctor: "Dr. Johnson",
    status: "Discharged",
    gender: "Female",
    age: 42,
    address: "456 Oak St, Anytown USA",
    phoneNumber: "555-5678"
  },
  {
    id: 6,
    dateOfEntry: "2022-01-05",
    fullName: "Jane Smith",
    firstName: "Jane",
    lastName: "Smith",
    referredByDoctor: "Dr. Johnson",
    status: "Discharged",
    gender: "Female",
    age: 42,
    address: "456 Oak St, Anytown USA",
    phoneNumber: "555-5678"
  },
  {
    id: 7,
    dateOfEntry: "2022-01-05",
    fullName: "Jane Smith",
    firstName: "Jane",
    lastName: "Smith",
    referredByDoctor: "Dr. Johnson",
    status: "Discharged",
    gender: "Female",
    age: 42,
    address: "456 Oak St, Anytown USA",
    phoneNumber: "555-5678"
  }
];

export const mockDoctorsData = [
  {
    id: 1,
    fullName: "John Doe",
    gender: "Male",
    specialist: "Cardiologist",
    phone: "555-1234",
    email: "johndoe@email.com",
    education: "MBBS, MD"
  },
  {
    id: 2,
    fullName: "Jane Smith",
    gender: "Female",
    specialist: "Cardiologist",
    phone: "555-5678",
    email: "janesmith@email.com",
    education: "MBBS"
  },
  {
    id: 3,
    fullName: "Jane Smith",
    gender: "Female",
    specialist: "Cardiologist",
    phone: "555-5678",
    email: "janesmith@email.com",
    education: "MBBS, MD"
  },
  {
    id: 4,
    fullName: "Jane Smith",
    gender: "Male",
    specialist: "Cardiologist",
    phone: "555-5678",
    email: "janesmith@email.com",
    education: "MBBS, MD"
  },
  {
    id: 5,
    fullName: "Jane Smith",
    gender: "Male",
    specialist: "Cardiologist",
    phone: "555-5678",
    email: "janesmith@email.com",
    education: "MBBS, MD"
  },
  {
    id: 6,
    fullName: "Jane Smith",
    gender: "Female",
    specialist: "Dentist",
    phone: "555-5678",
    email: "janesmith@email.com",
    education: "BDS, MDS"
  },
  {
    id: 7,
    fullName: "Jane Smith",
    gender: "Female",
    specialist: "Cardiologist",
    phone: "555-5678",
    email: "janesmith@email.com",
    education: "MBBS"
  }
];

export const appointmentsData = [
  {
    id: 1,
    fullName: "John Doe",
    gender: "Male",
    phone: "555-1234",
    age: "19",
    appointmentDate: "2022-01-01",
    referredByDoctor: "Dr. Smith",
    assignedDoctor: "Dr. John",
    status: "open"
  },
  {
    id: 2,
    fullName: "John Doe",
    gender: "Male",
    phone: "555-1234",
    age: "19",
    appointmentDate: "2022-01-01",
    referredByDoctor: "Dr. Smith",
    assignedDoctor: "Dr. John",
    status: "open"
  },
  {
    id: 3,
    fullName: "John Doe",
    gender: "Male",
    phone: "555-1234",
    age: "19",
    appointmentDate: "2022-01-01",
    referredByDoctor: "Dr. Smith",
    assignedDoctor: "Dr. John",
    status: "open"
  },
  {
    id: 4,
    fullName: "John Doe",
    gender: "Male",
    phone: "555-1234",
    age: "19",
    appointmentDate: "2022-01-01",
    referredByDoctor: "Dr. Smith",
    assignedDoctor: "Dr. John",
    status: "completed"
  }
];

export const labResults = [
  {
    type: "Blood Test",
    result: "7.8",
    referenceRange: "4.0 - 6.0",
    unit: "mmol/L"
  },
  {
    type: "Urine Test",
    result: "Negative",
    referenceRange: "Negative",
    unit: null
  },
  {
    type: "ECG",
    result: "Normal sinus rhythm",
    referenceRange: null,
    unit: null
  }
];

//* calendar Events
let eventGuid = 0;
export function createEventId() {
  return String(eventGuid++);
}
let todayStr = moment().format("YYYY-MM-DD"); // YYYY-MM-DD of today

interface Event {
  id: string;
  title: string;
  start: string;
}

export const INITIAL_EVENTS: Event[] = [
  {
    id: createEventId(),
    title: "Lunch Pary",
    start: todayStr + "T09:00:00"
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + "T16:00:00"
  },
  {
    id: createEventId(),
    title: "Head Meetup",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + "T20:00:00"
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + "T09:00:00"
  },
  {
    id: createEventId(),
    title: "Payment Shedules",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + "T13:00:00"
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + "T13:00:00"
  }
];

export const INITIAL_TASKS = [
  {
    id: uuidv4(),
    title: "Lunch Pary",
    state: "PLANNED"
  },
  {
    id: uuidv4(),
    title: "Timed event",
    state: "PLANNED"
  }
];


export const searchData = [
  {
    chartId: "1001",
    mrn: "23-103",
    lastName: "Smith",
    firstName: "John",
    mi: "A",
    dob: "1980-05-12",
    age: 43,
    phone: "555-1234",
  },
  {
    chartId: "1002",
    mrn: "23-104",
    lastName: "Johnson",
    firstName: "Emily",
    mi: "B",
    dob: "1990-07-19",
    age: 33,
    phone: "555-5678",
  },
  {
    chartId: "1003",
    mrn: "23-105",
    lastName: "Williams",
    firstName: "Michael",
    mi: "C",
    dob: "1975-11-30",
    age: 48,
    phone: "555-9876",
  },
  {
    chartId: "1004",
    mrn: "23-106",
    lastName: "Brown",
    firstName: "Sarah",
    mi: "D",
    dob: "1988-02-15",
    age: 35,
    phone: "555-6543",
  },
  {
    chartId: "1005",
    mrn: "23-107",
    lastName: "Jones",
    firstName: "David",
    mi: "E",
    dob: "1995-08-23",
    age: 28,
    phone: "555-3456",
  },
  {
    chartId: "1006",
    mrn: "23-108",
    lastName: "Garcia",
    firstName: "Sophia",
    mi: "F",
    dob: "1972-03-05",
    age: 51,
    phone: "555-7890",
  },
  {
    chartId: "1007",
    mrn: "23-109",
    lastName: "Martinez",
    firstName: "James",
    mi: "G",
    dob: "1985-12-10",
    age: 38,
    phone: "555-4321",
  },
  {
    chartId: "1008",
    mrn: "23-110",
    lastName: "Lee",
    firstName: "Emma",
    mi: "H",
    dob: "2000-01-20",
    age: 25,
    phone: "555-2109",
  },
  {
    chartId: "1009",
    mrn: "23-111",
    lastName: "Harris",
    firstName: "Oliver",
    mi: "I",
    dob: "1993-06-15",
    age: 30,
    phone: "555-6789",
  },
  {
    chartId: "1010",
    mrn: "23-112",
    lastName: "Clark",
    firstName: "Isabella",
    mi: "J",
    dob: "1982-09-25",
    age: 41,
    phone: "555-8765",
  },
];
