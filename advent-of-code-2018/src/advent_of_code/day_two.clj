(ns advent-of-code.day-two
  (:require [advent-of-code.core :as core]))

(defn count-2-and-3-occurencies [map-list]
  (loop [new-list map-list
         twos 0
         threes 0]
    (let [head (first new-list)
          twos (if (some #(= 2 %) head) (+ 1 twos) twos)
          threes (if (some #(= 3 %) head) (+ 1 threes) threes)]
      (if (empty? (rest new-list))
        (* twos threes)
        (recur (rest new-list) twos threes)))))

(defn solve-first-problem [input]
  (->> input
       core/input->string-list
       (map frequencies)
       (map vals)
       count-2-and-3-occurencies))

