import { nodemailer } from 'nodemailer';
import {
  Button,
  Checkbox,
  Divider,
  Grid,
  Group,
  List,
  ListItem,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Contact() {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Grid className="contact-page" grow>
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Title order={2}>Sales, Installs, and Custom Commisions </Title>
        <p>
          All loudspeakers are custom built on request. Please reach out to discuss a quote,
          including customizations specific to your deployment.
        </p>
        <p>Faited Systems also provides these services:</p>
        <List>
          <ListItem>Venue audio design and installation</ListItem>
          <ListItem>Advanced acoustic simulation</ListItem>
        </List>
        <Divider my="lg" />
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            withAsterisk
            label="Name"
            placeholder="Your full name"
            key={form.key('name')}
            {...form.getInputProps('name')}
          />
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            key={form.key('email')}
            mt="sm"
            {...form.getInputProps('email')}
          />
          <TextInput
            withAsterisk
            label="Subject"
            placeholder="Quote for XX Quadras"
            key={form.key('subject')}
            mt="sm"
            {...form.getInputProps('subject')}
          />

          <Textarea
            withAsterisk
            label="Message"
            placeholder="Hello..."
            key={form.key('message')}
            mt="sm"
            {...form.getInputProps('message')}
          />
          <Checkbox
            label="Quadra Inquiry?"
            key={form.key('quadraInquiry')}
            mt="sm"
            {...form.getInputProps('quadraInquiry', { type: 'checkbox' })}
          />

          <Group justify="flex-end" mt="sm">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Grid.Col>
    </Grid>
  );
}
