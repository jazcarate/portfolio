package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"io/fs"
	"log"
	"os"
	"path/filepath"
	"strings"
)

func main() {
	if err := buildPortfolio(); err != nil {
		log.Fatalf("Error: %v", err)
	}
	fmt.Println("Build completed successfully")
}

func buildPortfolio() error {
	fmt.Println("Loading portfolio data...")
	portfolio, err := loadPortfolio()
	if err != nil {
		return fmt.Errorf("failed to load portfolio: %w", err)
	}

	fmt.Println("Loading template...")
	tmpl, err := loadTemplate()
	if err != nil {
		return fmt.Errorf("failed to load template: %w", err)
	}

	fmt.Println("Generating HTML...")
	htmlContent, err := generateHTML(tmpl, portfolio)
	if err != nil {
		return fmt.Errorf("failed to generate HTML: %w", err)
	}

	if err := os.RemoveAll("dist"); err != nil {
		return fmt.Errorf("failed to delete `dist' directory: %w", err)
	}

	if err := os.MkdirAll("dist", 0755); err != nil {
		return fmt.Errorf("failed to create `dist' directory: %w", err)
	}

	outputFile := "dist/index.html"
	if err := os.WriteFile(outputFile, []byte(htmlContent), 0644); err != nil {
		return fmt.Errorf("failed to write HTML file: %w", err)
	}
	fmt.Printf("Successfully generated %s\n", outputFile)

	fmt.Println("Copying static assets...")
	if err := copyStaticAssets(); err != nil {
		return fmt.Errorf("failed to copy static assets: %w", err)
	}
	fmt.Println("Static assets copied successfully")

	return nil
}

func loadPortfolio() (any, error) {
	data, err := os.ReadFile("src/portfolio.json")
	if err != nil {
		return nil, err
	}

	var portfolio any
	if err := json.Unmarshal(data, &portfolio); err != nil {
		return nil, err
	}

	return portfolio, nil
}

func loadTemplate() (*template.Template, error) {
	// Read the template file
	tmplContent, err := os.ReadFile("src/template.html")
	if err != nil {
		return nil, err
	}

	tmpl, err := template.New("portfolio").Funcs(template.FuncMap{
		"safeHTML": func(s string) template.HTML {
			return template.HTML(s)
		},
		"projectID": func(name string) string {
			id := strings.ToLower(name)
			id = strings.ReplaceAll(id, " ", "-")
			id = strings.ReplaceAll(id, ".", "")
			return id
		},
		"animationDelay": func(index int) int {
			return 500 + 130*index
		},
	}).Parse(string(tmplContent))
	if err != nil {
		return nil, err
	}

	return tmpl, nil
}

func generateHTML(tmpl *template.Template, portfolio any) (string, error) {
	var buf strings.Builder
	if err := tmpl.Execute(&buf, portfolio); err != nil {
		return "", err
	}

	// TODO: minify

	return buf.String(), nil
}

func copyStaticAssets() error {
	return filepath.WalkDir("static", func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}

		relPath, err := filepath.Rel("static", path)
		if err != nil {
			return err
		}

		destPath := filepath.Join("dist", relPath)

		if d.IsDir() {
			return os.MkdirAll(destPath, 0755)
		} else {
			return copyFile(path, destPath)
		}
	})
}

func copyFile(src, dst string) error {
	dstDir := filepath.Dir(dst)
	if err := os.MkdirAll(dstDir, 0755); err != nil {
		return err
	}

	srcData, err := os.ReadFile(src)
	if err != nil {
		return err
	}

	return os.WriteFile(dst, srcData, 0644)
}
