/*
 * File: students.ts
 * Author: Zara Qadri
 * Date: October 30, 2026
 *
 * This file defines the Student interface for the portal.
 * It contains the starting student data and receives no props.
 * Each student has an ID, first name, last name, grade, and average.
 * The array includes students in grades 9 through 12.
 * It exports the interface and student array for other components.
 */

export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    grade: number;
    average: number;
}

export const students: Student[] = [
    {
    id: 1,
    firstName: "Zara",
    lastName: "Ahmed",
    grade: 9,
    average: 85,
    },
    {
    id: 2,
    firstName: "Julian",
    lastName: "Alvarez",
    grade: 9,
    average: 74,
    },
    {
    id: 3,
    firstName: "Roselle",
    lastName: "Blanco",
    grade: 10,
    average: 92,
    },
    {
    id: 4,
    firstName: "Carl",
    lastName: "Ibarlin",
    grade: 10,
    average: 68,
    },
    {
    id: 5,
    firstName: "Nathan",
    lastName: "Foran",
    grade: 11,
    average: 80,
    },
    {
    id: 6,
    firstName: "Christina",
    lastName: "Pham",
    grade: 11,
    average: 77,
    },
    {
    id: 7,
    firstName: "Yasmin",
    lastName: "Dulay",
    grade: 12,
    average: 89,
    },
    {
    id: 8,
    firstName: "Kylian",
    lastName: "Mbappe",
    grade: 12,
    average: 73,
    },
];