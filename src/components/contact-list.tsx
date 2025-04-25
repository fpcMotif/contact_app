"use client";

import {ContactCard} from '@/components/contact-card';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import React, {useState} from 'react';

interface Contact {
  id: number;
  name: string;
  department: string;
  phone: string;
  email: string;
  image?: string;
}

const contactsData: Contact[] = [
  {
    id: 1,
    name: 'John Doe',
    department: 'Engineering',
    phone: '123-456-7890',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    department: 'Marketing',
    phone: '987-654-3210',
    email: 'jane.smith@example.com',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    department: 'Sales',
    phone: '555-123-4567',
    email: 'alice.johnson@example.com',
  },
  {
    id: 4,
    name: 'Bob Williams',
    department: 'Engineering',
    phone: '111-222-3333',
    email: 'bob.williams@example.com',
  },
  {
    id: 5,
    name: 'Charlie Brown',
    department: 'Marketing',
    phone: '444-555-6666',
    email: 'charlie.brown@example.com',
  },
  {
    id: 6,
    name: 'Diana Miller',
    department: 'HR',
    phone: '777-888-9999',
    email: 'diana.miller@example.com',
  },
  {
    id: 7,
    name: 'David Lee',
    department: 'Finance',
    phone: '333-444-5555',
    email: 'david.lee@example.com',
  },
  {
    id: 8,
    name: 'Emily Wilson',
    department: 'Engineering',
    phone: '888-999-0000',
    email: 'emily.wilson@example.com',
  },
  {
    id: 9,
    name: 'Frank Garcia',
    department: 'Sales',
    phone: '666-777-8888',
    email: 'frank.garcia@example.com',
  },
  {
    id: 10,
    name: 'Grace Rodriguez',
    department: 'Marketing',
    phone: '222-333-4444',
    email: 'grace.rodriguez@example.com',
  },
];

const departments = ['All', ...Array.from(new Set(contactsData.map((contact) => contact.department)))];

export const ContactList: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const filteredContacts =
    selectedDepartment === 'All'
      ? contactsData
      : contactsData.filter((contact) => contact.department === selectedDepartment);

  return (
    <div>
      <div className="mb-4">
        <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a department" />
          </SelectTrigger>
          <SelectContent>
            {departments.map((department) => (
              <SelectItem key={department} value={department}>
                {department}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredContacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};
