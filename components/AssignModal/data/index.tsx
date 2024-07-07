import Input from '@/components/Input'
import { generateFormData } from '@/utils/Admin/MarketPlacePageContent/Form'
import { FieldRow } from '@/styles/Components/AssignModal/AssignForm'

export const renderFieldRows = (control: any, errors: any) => {
  const rows = []
  const formData = generateFormData()
  for (let i = 0; i < formData.length; i += 2) {
    rows.push(
      <FieldRow key={i}>
        <Input
          title={formData[i].title}
          control={control}
          controllername={formData[i].controllername}
          placeholder={formData[i].placeholder}
          type={formData[i].type as any}
          errors={errors}
          disabled={true}
          defaultValue=""
        />
        {formData[i + 1] && (
          <Input
            title={formData[i + 1].title}
            control={control}
            controllername={formData[i + 1].controllername}
            placeholder={formData[i + 1].placeholder}
            type={formData[i + 1].type as any}
            errors={errors}
            disabled={true}
            defaultValue=""
          />
        )}
      </FieldRow>
    )
  }

  return rows
}

export const hostingTypeOptions = [
  { label: 'With Hosting', value: 'with_hosting' },
  { label: 'Without Hosting', value: 'without_hosting' }
]
