import { TextInput, Textarea, SimpleGrid, Group, Title, Button, MultiSelect } from '@mantine/core';
import React from 'react';
import { useForm } from '@mantine/form';
import styles from './Rate_peers_Comprehensive_Form.module.css';

export function Rate_peers_Comprehensive_Form() {
    const form = useForm({
        initialValues: {
            problemSolvingApproach: '',
            technologiesUsed: [],
            codeReadability: '',
            otherComments: '',
        },
        validate: {
            problemSolvingApproach: (value) => value.trim().length === 0 || isNaN(value),
            codeReadability: (value) => value.trim().length === 0 || isNaN(value),
        },
    });

    const handleSubmit = () => {
        // Handle form submission
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)} className={styles.form}>
            <Title
                order={2}
                size="h1"
                style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                fw={900}
                ta="center"
            >
                Rate Peers Comprehensive Form
            </Title>

            <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                <TextInput
                    label="Rate Problem Solving Approach (out of 5)"
                    placeholder="Enter rating"
                    name="problemSolvingApproach"
                    variant="filled"
                    {...form.getInputProps('problemSolvingApproach')}
                />
                <MultiSelect
                    label="What Technologies Have Been Used"
                    placeholder="Pick value"
                    data={['React', 'Angular', 'Flask', 'Node.js', 'Django', 'Flutter', 'Three.js', '.NET']}
                    searchable
                    clearable
                    hidePickedOptions
                    nothingFoundMessage="Nothing found..."
                    name="technologiesUsed"
                    value={form.values.technologiesUsed}
                    onChange={(value) => form.setFieldValue('technologiesUsed', value)}
                />
            </SimpleGrid>

            <TextInput
                label="Rate Code Readability (out of 5)"
                placeholder="Enter rating"
                mt="xl"
                name="codeReadability"
                variant="filled"
                {...form.getInputProps('codeReadability')}
            />

            <Textarea
                mt="md"
                label="Other Comments"
                placeholder="Enter your comments here"
                maxRows={10}
                minRows={5}
                autosize
                name="otherComments"
                variant="filled"
                {...form.getInputProps('otherComments')}
            />

            <Group justify="center" mt="xl">
                <Button type="submit" size="md">
                    Submit
                </Button>
            </Group>
        </form>
    );
}