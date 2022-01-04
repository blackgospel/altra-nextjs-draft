import Section from 'components/global/section/index.section'
import Spacing from 'components/global/spacing/index.spacing'

const PrivatePolicySection: React.FC<PrivatePolicySectionProps> = ({
  title,
  subtitle,
  small,
  children,
}) => {
  return (
    <Section small={small}>
      {title && <h2>{title}</h2>}
      {subtitle && <h3>{subtitle}</h3>}

      <Spacing sm />

      {children}
    </Section>
  )
}

export default PrivatePolicySection
