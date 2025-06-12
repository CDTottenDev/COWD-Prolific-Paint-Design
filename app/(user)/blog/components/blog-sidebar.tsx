"use client"

import * as React from "react"
import { Search, Paintbrush } from "lucide-react"

import { Input } from "@/app/(user)/blog/components/ui/input"
import { Button } from "@/app/(user)/blog/components/ui/button"
import type { Category } from "@/app/(user)/blog/types/blog"

interface BlogSidebarProps {
  categories: Category[]
  onSearch: (query: string) => void
  className?: string
}

export function BlogSidebar({ categories, onSearch, className }: BlogSidebarProps) {
  const [searchQuery, setSearchQuery] = React.useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <aside
      className={`
      w-full md:w-64 md:flex-shrink-0 
      bg-[rgb(var(--color-card))]
      border-2 border-black paint-shadow
      ${className}
    `}
    >
      <div className="sticky top-0 p-4 space-y-6">
        <div className="relative">
          <div className="inline-block bg-[rgb(var(--color-warning))] px-3 py-1 mb-4 border-2 border-black paint-shadow rotate-2">
            <span className="text-sm font-bold text-[rgb(var(--color-text))]">Find Painting Tips</span>
          </div>

          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Search posts..."
              className="pl-9 bg-[rgb(var(--color-card))] border-2 border-black focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[rgb(var(--color-text))]" />
            <div className="flex space-x-2">
              <Button
                type="submit"
                className="mt-2 bg-[rgb(var(--color-primary))] text-[rgb(var(--color-text-2))] px-4 py-2 font-bold paint-btn border-2 border-black hover:bg-[rgb(var(--color-primary-dark))]"
              >
                Search
              </Button>
            </div>
          </form>
        </div>

        <div className="border-t-2 border-black my-6"></div>
        <Button
          onClick={() => {
            setSearchQuery("")
            onSearch("")
          }}
          className="mt-2 w-full bg-[rgb(var(--color-background-2))] text-[rgb(var(--color-text))] px-4 py-2 font-bold paint-btn border-2 border-black hover:bg-[rgb(var(--color-background-3))]"
        >
          Clear Selection
        </Button>
        <div className="border-2 border-black p-4 paint-shadow bg-[rgb(var(--color-card))]">
          <div className="mb-4">
            <h3 className="text-xl font-bold underline decoration-[rgb(var(--color-primary))] flex items-center text-[rgb(var(--color-text))]">
              Categories
              <Paintbrush className="ml-2 h-4 w-4" />
            </h3>
          </div>
          <nav className="space-y-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="ghost"
                className="w-full justify-start text-[rgb(var(--color-text))] font-medium hover:bg-[rgb(var(--color-primary-light))] border-2 border-black mb-2 paint-btn"
                onClick={() => onSearch(category.name)}
              >
                {category.name}
                <span className="ml-auto text-sm bg-[rgb(var(--color-primary))] text-[rgb(var(--color-text-2))] px-2 py-1 border border-black">
                  {category.count}
                </span>
              </Button>
            ))}
          </nav>
        </div>

        <div className="absolute -bottom-5 bg-[rgb(var(--color-primary))] text-[rgb(var(--color-text-2))] p-2 z-10 rotate-6 border-2 border-black">
          <span className="font-bold">Color Your World!</span>
        </div>
      </div>
    </aside>
  )
}
