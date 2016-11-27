package main

import (
		"net/http"
		"fmt"
	)

	func index(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Content-type", "text/plain")
			w.Write([]byte("Hello World!!!"))
			}

			func main() {
					fmt.Println("Hello!")
					http.HandleFunc("/", index)
					http.ListenAndServe(":90", nil)
					}
