import { Hr, Text } from '@react-email/components';
import { Html } from '@react-email/html';

export default function ContactEmail({
    name = 'Default',
    email = 'default@hotmail.com',
    subject = 'default',
    message = 'default',
}: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) {
    return (
        <Html>
            <Text>
                <b>Nome:</b>
            </Text>
            <Text>{name}</Text>
            <Hr />
            <Text>
                <b>Email:</b>
            </Text>
            <Text>{email}</Text>
            <Hr />
            <Text>
                <b>Asunto:</b>
            </Text>
            <Text>{subject}</Text>
            <Hr />
            <Text>
                <b>Mensagem:</b>
            </Text>
            <Text>{message}</Text>
        </Html>
    );
}
