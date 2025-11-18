/**
 * JSON Schema for Chapter 4 Content
 *
 * This schema represents the structure for organizing Vernier Graphical Analysis
 * manual content, as specified in the development guide.
 */

const jsonSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Graphical Analysis Manual Content Schema',
  description:
    'Schema for representing structured content from the Vernier Graphical Analysis manual',
  type: 'object',
  properties: {
    section_id: {
      type: 'string',
      description: "Unique identifier for the section (e.g., '4.I')",
    },
    section_title: {
      type: 'string',
      description: 'Title of the section',
    },
    content: {
      type: 'string',
      description: 'Main content text for the section',
    },
    subsections: {
      type: 'array',
      description: 'List of subsections within this section',
      items: {
        type: 'object',
        properties: {
          subsection_id: {
            type: 'string',
            description: "Unique identifier for the subsection (e.g., '4.I.1')",
          },
          subsection_title: {
            type: 'string',
            description: 'Title of the subsection',
          },
          content: {
            type: 'string',
            description: 'Main content text for the subsection',
          },
          procedures: {
            type: 'array',
            description: 'Step-by-step instructions for performing a task',
            items: {
              type: 'object',
              properties: {
                step_number: {
                  type: 'integer',
                  description: 'Order number of the step',
                },
                instruction: {
                  type: 'string',
                  description: 'The instruction to perform',
                },
                ui_element: {
                  type: 'string',
                  description:
                    "UI element referenced in the instruction (e.g., 'Column Options icon')",
                },
                tip: {
                  type: 'string',
                  description: 'Additional helpful information for this step',
                },
                screenshot_reference: {
                  type: 'string',
                  description: 'Reference to a screenshot illustrating this step',
                },
              },
              required: ['step_number', 'instruction'],
            },
          },
        },
        required: ['subsection_title', 'content'],
      },
    },
    related_sections: {
      type: 'array',
      description: 'References to related sections in the manual',
      items: {
        type: 'string',
      },
    },
    keywords: {
      type: 'array',
      description: 'Keywords related to this section for search and categorization',
      items: {
        type: 'string',
      },
    },
  },
  required: ['section_id', 'section_title', 'content'],
};

module.exports = jsonSchema;
