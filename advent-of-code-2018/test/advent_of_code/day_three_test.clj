(ns advent-of-code.day-three-test
  (:require [advent-of-code.day-three :refer :all]
            [clojure.test :as t]))

(def input  "./test/advent_of_code/input/day_three_input")

(t/deftest day-three-test
  (t/testing "First part"
    (t/is (= "" (first-part input)))))
