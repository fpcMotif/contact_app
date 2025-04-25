import {Mail, Phone} from 'lucide-react';

interface Contact {
  id: number;
  name: string;
  department: string;
  phone: string;
  email: string;
  image?: string;
}

interface ContactCardProps {
  contact: Contact;
}

export const ContactCard: React.FC<ContactCardProps> = ({contact}) => {
  return (
    <div className="bg-card rounded-lg shadow-md p-4 flex flex-col">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src={contact.image || `https://picsum.photos/128/128?random=${contact.id}`}
            alt={contact.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">{contact.name}</h2>
          <p className="text-sm text-muted-foreground">{contact.department}</p>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Phone className="h-4 w-4" />
          <span>{contact.phone}</span>
        </div>
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Mail className="h-4 w-4" />
          <span>{contact.email}</span>
        </div>
      </div>
    </div>
  );
};
