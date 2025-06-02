import { Metadata } from 'next'
import { generateMetadata } from '../metadata'

export const metadata: Metadata = {
  ...generateMetadata(
    "Contact - Season 26: Life in Progress",
    "Get in touch with Season26 - whether you have questions, collaboration ideas, or just want to say hello. We'd love to hear from you!",
    "/contact",
    "/og-image.jpg"
  ),
  keywords: "contact Season26, get in touch, collaboration, feedback, questions"
}
