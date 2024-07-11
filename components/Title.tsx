import React from 'react'

const Title = ({ title, subtitle }: { title: string, subtitle: string}) => {
  return (
    <div className="text-center mx-auto mt-20 mb-12">
      <div className="text-2xl text-secondary font-semibold">{subtitle}</div>
      <div className="text-5xl font-bold">{title}</div>
    </div>
  )
}

export default Title