'use client'

import {
  Container,
  Title,
  Accordion,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core';
import {
  IconPlus,
  IconCircleCheck,
  IconProgress,
  IconCircleX,
  IconFlag3,
} from '@tabler/icons-react';

const faqData = [
  {
    value: 'create-task',
    question: 'How do I create a new task?',
    answer:
      'Click the "Create Task" button (or the "+" icon) at the top of the left panel. Fill out the form in the modal window that appears and click "Save".',
  },
  {
    value: 'edit-delete-task',
    question: 'How do I edit or delete a task?',
    answer:
      'First, select a task by clicking on it. The details will appear on the right. Click the pencil icon to edit, or the trash icon to delete.',
  },
  {
    value: 'status-meaning',
    question: 'What do the statuses mean?',
    answer: (
      <>
        <Text mb="xs">
          Statuses help you track the progress of your task:
        </Text>
        <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
            </ThemeIcon>
          }
        >
          <List.Item
            icon={
              <ThemeIcon color="red" size={24} radius="xl">
                <IconCircleX style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            <b>Not Started:</b> The task has not been started yet.
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="orange" size={24} radius="xl">
                <IconProgress style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            <b>In Progress:</b> The task is currently being worked on.
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="green" size={24} radius="xl">
                <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            <b>Completed:</b> The task is finished.
          </List.Item>
        </List>
      </>
    ),
  },
  {
    value: 'priority-meaning',
    question: 'What do the priorities mean?',
    answer: (
      <>
        <Text mb="xs">
          Priorities help you rank tasks by importance. They are also
          color-coded:
        </Text>
        <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="gray" size={24} radius="xl">
              <IconFlag3 style={{ width: rem(16), height: rem(16) }} />
            </ThemeIcon>
          }
        >
          <List.Item
            icon={
              <ThemeIcon color="red" size={24} radius="xl">
                <IconFlag3 style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            <b>High:</b> An urgent and important task.
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="blue" size={24} radius="xl">
                <IconFlag3 style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            <b>Moderate:</b> A regular task.
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="green" size={24} radius="xl">
                <IconFlag3 style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            <b>Low:</b> A non-urgent task.
          </List.Item>
        </List>
      </>
    ),
  },
];

export function HelpFAQ() {
  return (
    <Container size="md" my="xl">
      <Title order={2} ta="center" mb="lg">
        Frequently Asked Questions (Help & FAQ)
      </Title>

      <Accordion
        chevron={<IconPlus style={{ width: rem(20), height: rem(20) }} />}
        variant="separated"
        radius="md"
        defaultValue="create-task"
      >
        {faqData.map((item) => (
          <Accordion.Item value={item.value} key={item.value}>
            <Accordion.Control>{item.question}</Accordion.Control>
            <Accordion.Panel>
              {typeof item.answer === 'string' ? (
                <Text>{item.answer}</Text>
              ) : (
                item.answer
              )}
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}

export default HelpFAQ;