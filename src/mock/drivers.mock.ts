import { Status } from "@/shared/types/enums";

export const driversMock = [
	{
		id: "1",
		name: "João da Silva",
		phone: "(11) 99999-9999",
		cpf: "12345678901",
		address: "Rua 1",
		cnh: "12345678901",
		birthDate: "1990-01-01",
		status: Status.ACTIVE,
	},
	{
		id: "2",
		name: "Ana Beatriz Gomes",
		phone: "(11) 98888-7777",
		cpf: "12345678902",
		address: "Rua 2",
		cnh: "12345678902",
		birthDate: "1990-01-01",
		status: Status.ACTIVE,
	},
	{
		id: "3",
		name: "Carlos Henrique Lima",
		phone: "(11) 98765-4321",
		cpf: "12345678903",
		address: "Rua 3",
		cnh: "12345678903",
		birthDate: "1990-01-01",
		status: Status.ACTIVE,
	},
];
