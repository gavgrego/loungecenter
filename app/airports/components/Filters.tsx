"use client"

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Checkbox,
  CheckboxGroup,
} from "@nextui-org/react"

import { AirportResponseDataObject } from "@/data/api/documentation"

type FiltersProps<T> = {
  selectedCities: string[]
  availableCities?: string[]
  onCitySelection: (city: string, isSelected: boolean) => void
}

const Filters = ({
  selectedCities,
  availableCities,
  onCitySelection,
}: FiltersProps<AirportResponseDataObject>) => {
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Button className="cursor-pointer mb-3" color="secondary">
          Filters
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-4">
        <div className="flex flex-row gap-6">
          <CheckboxGroup
            label="Cities"
            value={selectedCities}
            onValueChange={(value) => {
              const newValue = value as string[]

              selectedCities.forEach((city) => {
                if (!newValue.includes(city)) {
                  onCitySelection(city, false)
                }
              })
              newValue.forEach((city) => {
                if (!selectedCities.includes(city)) {
                  onCitySelection(city, true)
                }
              })
            }}
          >
            {availableCities?.map((city) => (
              <Checkbox key={city} value={city}>
                {city}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default Filters
